"use client";

import { useArtifactsSetData } from "~/hooks/useArtifactData";

import PageTitle from "../common/typography/pageTitle";
import ShowcaseFilterContainer from "../layout/container/showcaseFilterContainer";

import AllArtifactsShowcase from "./allArtifactsShowcase";
import ArtifactFilterSection from "./filtering/artifactFilterSection";

export default function ArtifactsClient() {
  const { data: artifactSets } = useArtifactsSetData();

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
