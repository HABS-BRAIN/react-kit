import { Field, Form } from './shared-types/form'
import { Step, Protocol } from './shared-types/protocol'
import { SequenceBlockItem, StudyFullInfo } from './shared-types/study'

type SequenceBlock = StudyFullInfo['sequence'][number];
type PopulatedCompanionBlock =
  | {
      type: 'protocol';
      _id: string;
      mixSteps?: boolean;
      protocol: Protocol;
    }
  | {
      type: 'form';
      _id: string;
      mixSteps?: boolean;
      form: Form;
    };

type AnySequenceBlock = SequenceBlock | PopulatedCompanionBlock;

const getBlockSteps = (block: AnySequenceBlock): Step[] | Field[] => {
  if (block.type === 'protocol') {
    return block.protocol.steps;
  }
  return block.form.fields;
};

const getBlockId = (block: AnySequenceBlock): string =>
  block.type === 'protocol' ? block.protocol._id : block.form._id;

export type LinearSequenceItemPosition = {
  blockIndex: number;
  stepIndex: number;
  linearIndex: number;
};

export type LinearSequenceItem =
  | ({ step: Step; type: 'protocol' } & LinearSequenceItemPosition)
  | ({ step: Field; type: 'form' } & LinearSequenceItemPosition);

function createSequenceItem(
  block: AnySequenceBlock,
  stepIndex: number,
  blockIndex: number,
  linearIndex: number,
): LinearSequenceItem {
  const item = {
    step:
      block.type === 'protocol'
        ? block.protocol.steps[stepIndex]
        : block.form.fields[stepIndex],
    type: block.type,
    blockIndex,
    stepIndex,
    linearIndex,
  };
  return item as LinearSequenceItem;
}

function addBlockToSequence(
  linearSequence: LinearSequenceItem[],
  block: AnySequenceBlock,
  blockIndex: number,
  linearIndexRef: { value: number },
): void {
  const steps = getBlockSteps(block);
  for (let stepIndex = 0; stepIndex < steps.length; stepIndex++) {
    linearSequence.push(
      createSequenceItem(block, stepIndex, blockIndex, linearIndexRef.value++),
    );
  }
}

function injectCompanion(
  linearSequence: LinearSequenceItem[],
  companion: PopulatedCompanionBlock,
  mainStepIndex: number,
  blockIndex: number,
  linearIndexRef: { value: number },
): void {
  if (companion.mixSteps) {
    // One companion step per main step, cycling through the companion's steps
    const companionSteps = getBlockSteps(companion);
    if (companionSteps.length === 0) {
      return;
    }
    linearSequence.push(
      createSequenceItem(
        companion,
        mainStepIndex % companionSteps.length,
        blockIndex,
        linearIndexRef.value++,
      ),
    );
  } else {
    // Full companion block for every main step
    addBlockToSequence(linearSequence, companion, blockIndex, linearIndexRef);
  }
}

export function extractLinearStudySequence(
  studyFullInfo: StudyFullInfo,
): LinearSequenceItem[] {
  const linearSequence: LinearSequenceItem[] = [];
  const linearIndex = { value: 0 };

  for (
    let blockIndex = 0;
    blockIndex < studyFullInfo.sequence.length;
    blockIndex++
  ) {
    const currentBlock = studyFullInfo.sequence[blockIndex];

    const currentSteps = getBlockSteps(currentBlock);
    const beforeBlocks =
      (currentBlock.beforeBlocks ?? []) as PopulatedCompanionBlock[];
    const afterBlocks =
      (currentBlock.afterBlocks ?? []) as PopulatedCompanionBlock[];

    const mainStepCount = currentSteps.length;
    // If the block has no main steps (e.g. EMOTINDER preview produced zero media steps) but
    // has companions, still run one pass so before/after blocks appear in the linear order.
    const runCompanionOnlyPass =
      mainStepCount === 0 &&
      (beforeBlocks.length > 0 || afterBlocks.length > 0);
    const iterations = runCompanionOnlyPass ? 1 : mainStepCount;

    for (let stepIndex = 0; stepIndex < iterations; stepIndex++) {
      for (const companion of beforeBlocks) {
        injectCompanion(
          linearSequence,
          companion,
          stepIndex,
          blockIndex,
          linearIndex,
        );
      }

      if (mainStepCount > 0) {
        linearSequence.push(
          createSequenceItem(
            currentBlock,
            stepIndex,
            blockIndex,
            linearIndex.value++,
          ),
        );
      }

      for (const companion of afterBlocks) {
        injectCompanion(
          linearSequence,
          companion,
          stepIndex,
          blockIndex,
          linearIndex,
        );
      }
    }
  }

  return linearSequence;
}
