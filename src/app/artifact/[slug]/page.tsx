"use server";

import ArtifactClient from "~/components/artifact/artifactClient";
import {
  getArtifactSetById,
  getArtifactSets,
} from "~/services/teyvatServer/teyvatArchive.service";

export async function generateStaticParms() {
  const artifacts: IBaseArtifactSet[] = await getArtifactSets();
  return {
    paths: artifacts.map((artifact) => ({
      params: {
        slug: artifact.id,
      },
    })),
  };
}

export default async function Artifact({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;

  const artifactSet: IArtifactSet = await getArtifactSetById(slug);

  return <ArtifactClient {...{ artifactSet }} />;
}
