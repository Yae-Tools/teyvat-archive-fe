"use server";

import { Metadata } from "next";

import AllArtifactsShowcase from "~/components/artifacts/allArtifactsShowcase";
import ArtifactFilterSection from "~/components/artifacts/filtering/artifactFilterSection";
import PageTitle from "~/components/common/typography/pageTitle";
import ShowcaseFilterContainer from "~/components/layout/container/showcaseFilterContainer";
import { getArtifactSets } from "~/services/teyvatServer/teyvatArchive.service";
import { IBaseArtifactSet } from "~/types/enka/artifacts.types";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Artifacts",
    description: "Teyvat Archive - Artifacts",
    keywords:
      "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Artifacts"
  };
}

export default async function Artifacts() {
  const artifactSets: IBaseArtifactSet[] = await getArtifactSets();

  return (
    <>
      <ShowcaseFilterContainer isSticky>
        <div className="mt-3 flex w-full items-center justify-center xl:mb-4">
          <PageTitle title="Teyvat Artifacts" />
        </div>
        <ArtifactFilterSection />
      </ShowcaseFilterContainer>
      <AllArtifactsShowcase artifactSets={artifactSets} />
    </>
  );
}
