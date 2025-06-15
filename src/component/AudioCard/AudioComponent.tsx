type AudioProp = {
  src: string;
};
const AudioComponent: React.FC<AudioProp> = (props) => {
  return (
    <audio controls loop style={{ width: "270px" }}>
      <source src={props.src} type="audio/mp3" />
      <track kind="captions" label="音声の説明" src="" srcLang="ja" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioComponent;
