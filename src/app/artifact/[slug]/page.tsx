"use server";

import ArtifactClient from "~/components/artifact/artifactClient";
import { getArtifactSetById } from "~/services/teyvatServer/teyvatArchive.service";

export default async function Artifact({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;

  const artifactSet: IArtifactSet = await getArtifactSetById(slug);

  return <ArtifactClient {...{ artifactSet }} />;
}
