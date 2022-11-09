export interface ISpeechRecognition {
  continuous: boolean;
  lang: string;
  onstart: (event: any) => void;
  onend: (event: any) => void;
  onresult: (event: any) => void;
  start: () => void;
  stop: () => void;
}
