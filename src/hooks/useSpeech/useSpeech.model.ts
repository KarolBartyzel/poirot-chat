export interface ISpeechRecognition {
  continuous: boolean;
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (event: any) => void;
  onend: (event: any) => void;
  onspeechend: (event: any) => void;
  onresult: (event: any) => void;
  start: () => void;
  stop: () => void;
}
