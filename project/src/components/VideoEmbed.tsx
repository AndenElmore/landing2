import React from 'react';

interface VideoEmbedProps {
  url: string;
  title?: string;
}

export default function VideoEmbed({ url, title }: VideoEmbedProps) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={url}
        title={title || "Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg"
      />
    </div>
  );
}
