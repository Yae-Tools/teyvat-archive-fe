"use server";

import { Metadata } from "next";

import ArtifactClient from "~/components/artifact/artifactClient";
import { getArtifactSetById } from "~/services/teyvatServer/teyvatArchive.service";
import { IArtifactSet } from "~/types/enka/artifacts.types";

async function fetchArtifactSet(slug: string) {
  const artifactSet: IArtifactSet = await getArtifactSetById(slug);
  if (!artifactSet) {
    throw new Error("Artifact set not found");
  }
  return artifactSet;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const artifactSet: IArtifactSet = await fetchArtifactSet(slug);

  return {
    title: `Teyvat Archive - ${artifactSet.name}`,
    description: `Artifact Set: ${artifactSet.name}`,
    keywords: `Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Artifacts, ${artifactSet.name}`
  };
}

export default async function Artifact({
  params
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;

  const artifactSet = await fetchArtifactSet(slug);

  return <ArtifactClient {...{ artifactSet }} />;
}
