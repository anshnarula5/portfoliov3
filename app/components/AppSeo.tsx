"use client"

import { NextSeo } from "next-seo";
import React from "react";

type AppSeoProps = {
  image?: string;
  description?: string;
  url?: string;
  title?: string;
  disableIndexing?: boolean;
};

const defaultSEOConfig: AppSeoProps = {
    image : `${process.env.PUBLIC_CLIENT_DOMAIN}/assets/images/preview_image_share.png`,
    title : "Ansh Narula",
    description : " JavaScript, TypeScript, C++, Java proficient full-stack engineer integrating AWS, seeking innovative projects and collaborative growth.",
    disableIndexing : false,
}

function AppSEO(props: AppSeoProps) {

  const {
    title = defaultSEOConfig.title,
    description = defaultSEOConfig.description,
    url = `/`,
    disableIndexing = defaultSEOConfig.disableIndexing,
  } = props;


  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title: title,
        url: url,
        description: description,
      }}
      nofollow={disableIndexing}
      noindex={disableIndexing}
    />
  );
}

export default AppSEO;
