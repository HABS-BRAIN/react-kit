import { extractLinearStudySequence } from './src'
import { StudyFullInfo } from './src/shared-types/study'
import { inspect } from 'node:util'

const study: StudyFullInfo = {
  _id: '69a72ebcc450d55d97f98041',
  title: 'Dev',
  description: 'Dev sequence',
  templateId: '697c76890f7847961675e132',
  participantId: '1c24cae8-e7bc-4a40-88e3-451c91bd7167',
  sequence: [
    {
      templateId: '6971f39af98861bcc10c80c0',
      type: 'protocol',
      protocol: {
        _id: 'generated_by_template-DEFAULT-6971f39af98861bcc10c80c0',
        title: 'Artifact calibration',
        description: 'artifatcs',
        estimatedDuration: {
          total: 55,
          videos: 0,
          audios: 0,
          autoplay: 55,
        },
        steps: [
          {
            content: {
              type: 'text',
              text: 'Please blink your eyes naturally several times for the next 10 seconds.',
            },
            goNext: {
              type: 'autoplay',
              duration: 10,
              isCountdownPresented: true,
            },
            meta: {
              lslMarkerKey: 'BLINKS',
            },
          },
          {
            content: {
              type: 'text',
              text: 'Please close your eyes and stay relaxed without moving for 15 seconds.',
            },
            goNext: {
              type: 'autoplay',
              duration: 15,
              isCountdownPresented: true,
            },
            meta: {
              lslMarkerKey: 'BASELINE_EYES_CLOSED',
            },
          },
          {
            content: {
              type: 'text',
              text: 'Gently clench your jaw, then relax it. Repeat this a few times.',
            },
            goNext: {
              type: 'autoplay',
              duration: 10,
              isCountdownPresented: true,
            },
            meta: {
              lslMarkerKey: 'CLENCH_JAW',
            },
          },
          {
            content: {
              type: 'text',
              text: 'Raise your eyebrows and tighten your facial muscles briefly, then relax.',
            },
            goNext: {
              type: 'autoplay',
              duration: 10,
              isCountdownPresented: true,
            },
          },
          {
            content: {
              type: 'text',
              text: 'Move your arms',
            },
            goNext: {
              type: 'autoplay',
              duration: 10,
              isCountdownPresented: true,
            },
            meta: {
              lslMarkerKey: 'MOVE_ARMS',
            },
          },
        ],
      },
      runNextBlockAfterEachStep: 0,
      mixSteps: false,
    },
    {
      templateId: '697b8061b5de568e767309af',
      type: 'protocol',
      protocol: {
        _id: 'generated_by_template-DEFAULT-697b8061b5de568e767309af',
        title: 'dev',
        estimatedDuration: {
          total: 0,
          videos: 0,
          audios: 0,
          autoplay: 0,
        },
        steps: [
          {
            content: {
              type: 'text',
              text: 'Rate your feelings',
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction: 'Yammy?',
                  sliders: [
                    {
                      marks: {
                        '0': 'Noooo',
                        '100': 'Yessss',
                      },
                    },
                  ],
                },
              ],
            },
            operatorInstructions: 'Give to participant yogurt A',
          },
          {
            content: {
              type: 'text',
              text: 'Rate your feelings',
            },
            goNext: {
              type: 'userInteraction',
              userInteraction: [
                {
                  type: 'sliders',
                  instruction: 'Yammy?',
                  sliders: [
                    {
                      marks: {
                        '0': 'Noooo',
                        '100': 'Yessss',
                      },
                    },
                  ],
                },
              ],
            },
            operatorInstructions: 'Give to participant yogurt B',
          },
        ],
      },
      runNextBlockAfterEachStep: 2,
      mixSteps: false,
    },
    {
      templateId: '6970e0bbab12995ec94f73c5',
      type: 'protocol',
      protocol: {
        _id: 'generated_by_template-DEFAULT-6970e0bbab12995ec94f73c5',
        title: 'Buffering step',
        description: 'for the emotinder cycle',
        estimatedDuration: {
          total: 10,
          videos: 0,
          audios: 0,
          autoplay: 10,
        },
        steps: [
          {
            content: {
              type: 'text',
              text: 'Be ready in ',
            },
            goNext: {
              type: 'autoplay',
              duration: 10,
              isCountdownPresented: true,
            },
          },
        ],
      },
      runNextBlockAfterEachStep: 0,
      mixSteps: false,
    },
    {
      type: 'form',
      templateId: '69a0198e37342d3ede2112f8',
      form: {
        _id: 'generated_by_template-69a0198e37342d3ede2112f8',
        title: 'dev 1 question',
        fields: [
          {
            type: 'checkbox',
            label: 'question',
            config: {
              options: [
                {
                  value: 'yes',
                  label: 'YEEEEES',
                },
              ],
            },
          },
        ],
      },
      runNextBlockAfterEachStep: 0,
      mixSteps: false,
    },
  ],
  belongsToOrganization: ['6a206ab2-776e-4551-8117-6d75513cf89e'],
}

const linear = extractLinearStudySequence(study)
console.log('linear:\n', inspect(linear, { depth: null, colors: true, maxArrayLength: null }))