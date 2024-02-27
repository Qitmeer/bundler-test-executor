import { IArticleItem, ArticleItems } from '@configs/home/articles';
import { ITalkItem, TalkItems } from '@configs/home/talks';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const TalkItem = ({ title, subtitle, url }: ITalkItem) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <div className="w-80 overflow-hidden bg-white rounded-xl drop-shadow-lg">
      <ReactPlayer url={url} width={320} height={208} />
      <div title={`${title}: ${subtitle}`} className="text-left block px-5 py-3">
        <div className="font-bold text-base mb-4">{title}</div>
        <div className="text-xs truncate mb-2">{subtitle}</div>
      </div>
    </div>
  ) : null;
};

const ArticleItem = ({ title, subtitle, previewImage, link }: IArticleItem) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <div className="w-80 overflow-hidden bg-white rounded-xl drop-shadow-lg">
        <Link href={link} target="_blank" rel="noopener noreferrer">    
          <Image src={previewImage} alt="blogpost" />
      </Link>
      <div title={`${title}: ${subtitle}`} className="text-left block px-5 py-3">
        <div className="font-bold text-base mb-4">{title}</div>
        <div className="text-xs truncate mb-2">{subtitle}</div>
      </div>
    </div>
  ) : null;
};

const Media = () => {
  return (
    <section className="w-full text-center justify-center relative">
      <h1 className="title">“Talkin' about 4337”</h1>
      <div className="mx-auto w-2/3 flex flex-row flex-wrap justify-evenly mt-20 z-0 gap-x-12 gap-y-12">
        {TalkItems.map((item, idx) => (
          <TalkItem {...item} key={idx} />
        ))}
        {ArticleItems.map((item, idx) => (
          <ArticleItem {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Media;
