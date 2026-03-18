export type FilenameOptions = {
  participant?: string;
  session?: string;
};

export type LabRecorderStream = {
  name: string;
  type?: string;
  hostname?: string;
  sourceId?: string;
  uid?: string;
};


export type SelectStreamsRequest = {
  streams: LabRecorderStream[];
};