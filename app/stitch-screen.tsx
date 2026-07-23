type StitchScreenProps = {
  src: string;
  title: string;
};

export function StitchScreen({ src, title }: StitchScreenProps) {
  return (
    <main>
      <iframe
        className="stitch-screen"
        src={src}
        title={title}
        allow="clipboard-write"
      />
    </main>
  );
}
