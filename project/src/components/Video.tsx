interface VideoProps {
  videoUrl?: string;
}

export function Video({ videoUrl = 'https://opinaproo.xyz/tiktokavalia/respostaspremiada.com/wp-content/uploads/2025/01/VSL-TikTok-19.90.mp4' }: VideoProps) {
  return (
    <div className="relative w-full" style={{ paddingTop: '178.33%' }}>
      <video
        className="absolute top-0 left-0 w-full h-full"
        controls
        playsInline
        preload="metadata"
        poster="/video-thumbnail.jpg"
      >
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeos.
      </video>
    </div>
  );
}