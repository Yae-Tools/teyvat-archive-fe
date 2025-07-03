"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Plus, Minus, Save, Trash2 } from "lucide-react"
import { RichTextEditor } from "./rich-text-editor"

interface ICharacterBuildInput {
  characterId: string
  buildName: string
  lastUpdatedPatch: string
  mainStats: {
    sands: string[]
    goblet: string[]
    circlet: string[]
  }
  subStats: string[]
  talentPriority: {
    normalAttack: number
    elementalSkill: number
    elementalBurst: number
  }
  notes?: string
  artifactNotes?: string
  statNotes?: string
  talentNotes?: string
  weaponNotes?: string
  weapons: {
    weaponId: number
    weaponRank: number
    weaponRefinement: number | null
  }[]
  artifacts: {
    rank: number
    artifactSets: {
      setId: string
      piecesCount: number
    }[]
  }[]
}

const MAIN_STAT_OPTIONS = {
  sands: ["ATK%", "DEF%", "HP%", "Elemental Mastery", "Energy Recharge%"],
  goblet: ["ATK%", "Elemental DMG Bonus%", "Physical DMG Bonus%", "HP%", "DEF%"],
  circlet: ["CRIT Rate%", "CRIT DMG%", "Healing Bonus%", "ATK%", "DEF%", "HP%"],
}

const SUB_STAT_OPTIONS = [
  "CRIT Rate%",
  "CRIT DMG%",
  "ATK%",
  "ATK",
  "DEF%",
  "DEF",
  "HP%",
  "HP",
  "Elemental Mastery",
  "Energy Recharge%",
]

const ARTIFACT_SETS = [
  "Gladiator's Finale",
  "Wanderer's Troupe",
  "Noblesse Oblige",
  "Bloodstained Chivalry",
  "Viridescent Venerer",
  "Maiden Beloved",
  "Thundering Fury",
  "Thundersoother",
  "Crimson Witch of Flames",
  "Lavawalker",
  "Blizzard Strayer",
  "Heart of Depth",
  "Tenacity of the Millelith",
  "Pale Flame",
  "Emblem of Severed Fate",
  "Shimenawa's Reminiscence",
]

const CHARACTERS = [
  "Albedo",
  "Amber",
  "Barbara",
  "Beidou",
  "Bennett",
  "Chongyun",
  "Diluc",
  "Diona",
  "Fischl",
  "Ganyu",
  "Hu Tao",
  "Jean",
  "Kaeya",
  "Keqing",
  "Klee",
  "Lisa",
  "Mona",
  "Ningguang",
  "Noelle",
  "Qiqi",
  "Razor",
  "Sucrose",
  "Tartaglia",
  "Venti",
  "Xiangling",
  "Xiao",
  "Xingqiu",
  "Xinyan",
  "Zhongli",
  "Ayaka",
  "Yoimiya",
  "Sayu",
  "Raiden Shogun",
  "Kokomi",
  "Thoma",
  "Gorou",
  "Itto",
  "Yae Miko",
  "Ayato",
  "Yelan",
  "Shinobu",
  "Heizou",
  "Tighnari",
  "Collei",
  "Dori",
  "Candace",
  "Nilou",
  "Nahida",
  "Layla",
  "Faruzan",
  "Wanderer",
  "Yaoyao",
  "Alhaitham",
  "Baizhu",
  "Kaveh",
  "Kirara",
  "Lynette",
  "Lyney",
  "Freminet",
  "Neuvillette",
  "Wriothesley",
  "Charlotte",
  "Furina",
  "Chevreuse",
  "Navia",
  "Gaming",
  "Xianyun",
  "Chiori",
  "Arlecchino",
  "Sethos",
  "Clorinde",
  "Sigewinne",
  "Emilie",
  "Kinich",
  "Mualani",
  "Kachina",
  "Xilonen",
]

interface CharacterBuildFormProps {
  user: { id: string; displayName: string }
}

export function CharacterBuildForm({ user }: CharacterBuildFormProps) {
  const [formData, setFormData] = useState<ICharacterBuildInput>({
    characterId: "",
    buildName: "",
    lastUpdatedPatch: "",
    mainStats: {
      sands: [],
      goblet: [],
      circlet: [],
    },
    subStats: [],
    talentPriority: {
      normalAttack: 1,
      elementalSkill: 1,
      elementalBurst: 1,
    },
    notes: "",
    artifactNotes: "",
    statNotes: "",
    talentNotes: "",
    weaponNotes: "",
    weapons: [],
    artifacts: [],
  })

  const addMainStat = (type: keyof typeof formData.mainStats, stat: string) => {
    if (!formData.mainStats[type].includes(stat)) {
      setFormData((prev) => ({
        ...prev,
        mainStats: {
          ...prev.mainStats,
          [type]: [...prev.mainStats[type], stat],
        },
      }))
    }
  }

  const removeMainStat = (type: keyof typeof formData.mainStats, stat: string) => {
    setFormData((prev) => ({
      ...prev,
      mainStats: {
        ...prev.mainStats,
        [type]: prev.mainStats[type].filter((s) => s !== stat),
      },
    }))
  }

  const addSubStat = (stat: string) => {
    if (!formData.subStats.includes(stat)) {
      setFormData((prev) => ({
        ...prev,
        subStats: [...prev.subStats, stat],
      }))
    }
  }

  const removeSubStat = (stat: string) => {
    setFormData((prev) => ({
      ...prev,
      subStats: prev.subStats.filter((s) => s !== stat),
    }))
  }

  const addWeapon = () => {
    setFormData((prev) => ({
      ...prev,
      weapons: [...prev.weapons, { weaponId: 0, weaponRank: 1, weaponRefinement: 1 }],
    }))
  }

  const removeWeapon = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      weapons: prev.weapons.filter((_, i) => i !== index),
    }))
  }

  const updateWeapon = (index: number, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      weapons: prev.weapons.map((weapon, i) => (i === index ? { ...weapon, [field]: value } : weapon)),
    }))
  }

  const addArtifact = () => {
    setFormData((prev) => ({
      ...prev,
      artifacts: [...prev.artifacts, { rank: 1, artifactSets: [] }],
    }))
  }

  const removeArtifact = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      artifacts: prev.artifacts.filter((_, i) => i !== index),
    }))
  }

  const updateArtifact = (index: number, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      artifacts: prev.artifacts.map((artifact, i) => (i === index ? { ...artifact, [field]: value } : artifact)),
    }))
  }

  const addArtifactSet = (artifactIndex: number) => {
    setFormData((prev) => ({
      ...prev,
      artifacts: prev.artifacts.map((artifact, i) =>
        i === artifactIndex
          ? { ...artifact, artifactSets: [...artifact.artifactSets, { setId: "gladiators-finale", piecesCount: 2 }] }
          : artifact,
      ),
    }))
  }

  const removeArtifactSet = (artifactIndex: number, setIndex: number) => {
    setFormData((prev) => ({
      ...prev,
      artifacts: prev.artifacts.map((artifact, i) =>
        i === artifactIndex
          ? { ...artifact, artifactSets: artifact.artifactSets.filter((_, j) => j !== setIndex) }
          : artifact,
      ),
    }))
  }

  const updateArtifactSet = (artifactIndex: number, setIndex: number, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      artifacts: prev.artifacts.map((artifact, i) =>
        i === artifactIndex
          ? {
              ...artifact,
              artifactSets: artifact.artifactSets.map((set, j) => (j === setIndex ? { ...set, [field]: value } : set)),
            }
          : artifact,
      ),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const buildData = {
      ...formData,
      authorId: user.id, // Automatically set from logged-in user
    }
    console.log("Form submitted:", buildData)
    // Handle form submission here
  }

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create Character Build</CardTitle>
          <CardDescription>Design and share your character build configuration with the community</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="weapons">Weapons</TabsTrigger>
                <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-6">
                {/* Basic Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="characterId">Character</Label>
                      <Select
                        value={formData.characterId}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, characterId: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select character" />
                        </SelectTrigger>
                        <SelectContent>
                          {CHARACTERS.map((char) => (
                            <SelectItem key={char} value={char.toLowerCase()}>
                              {char}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="buildName">Build Name</Label>
                      <Input
                        id="buildName"
                        value={formData.buildName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, buildName: e.target.value }))}
                        placeholder="e.g., DPS Build, Support Build"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patch">Last Updated Patch</Label>
                      <Input
                        id="patch"
                        value={formData.lastUpdatedPatch}
                        onChange={(e) => setFormData((prev) => ({ ...prev, lastUpdatedPatch: e.target.value }))}
                        placeholder="e.g., 5.2"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Main Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Main Stats Priority</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(MAIN_STAT_OPTIONS).map(([type, options]) => (
                      <div key={type} className="space-y-2">
                        <Label className="capitalize">{type}</Label>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {formData.mainStats[type as keyof typeof formData.mainStats].map((stat) => (
                            <Badge
                              key={stat}
                              variant="secondary"
                              className="cursor-pointer"
                              onClick={() => removeMainStat(type as keyof typeof formData.mainStats, stat)}
                            >
                              {stat} <Minus className="ml-1 size-3" />
                            </Badge>
                          ))}
                        </div>
                        <Select
                          defaultValue="ATK%" // Updated default value
                          onValueChange={(value) => addMainStat(type as keyof typeof formData.mainStats, value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={`Add ${type} main stat`} />
                          </SelectTrigger>
                          <SelectContent>
                            {options.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Sub Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Sub Stats Priority</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {formData.subStats.map((stat) => (
                        <Badge
                          key={stat}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => removeSubStat(stat)}
                        >
                          {stat} <Minus className="ml-1 size-3" />
                        </Badge>
                      ))}
                    </div>
                    <Select
                      defaultValue="CRIT Rate%" // Updated default value
                      onValueChange={addSubStat}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Add sub stat priority" />
                      </SelectTrigger>
                      <SelectContent>
                        {SUB_STAT_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                {/* Talent Priority */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Talent Priority</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="normalAttack">Normal Attack</Label>
                      <Select
                        value={formData.talentPriority.normalAttack.toString()}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            talentPriority: { ...prev.talentPriority, normalAttack: Number.parseInt(value) },
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              Priority {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="elementalSkill">Elemental Skill</Label>
                      <Select
                        value={formData.talentPriority.elementalSkill.toString()}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            talentPriority: { ...prev.talentPriority, elementalSkill: Number.parseInt(value) },
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              Priority {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="elementalBurst">Elemental Burst</Label>
                      <Select
                        value={formData.talentPriority.elementalBurst.toString()}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            talentPriority: { ...prev.talentPriority, elementalBurst: Number.parseInt(value) },
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              Priority {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* General Notes */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Notes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="generalNotes">General Notes</Label>
                      <RichTextEditor
                        value={formData.notes || ""}
                        onChange={(value) => setFormData((prev) => ({ ...prev, notes: value }))}
                        placeholder="Add general build notes, playstyle tips, or other important information..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="statNotes">Stat Notes</Label>
                      <RichTextEditor
                        value={formData.statNotes || ""}
                        onChange={(value) => setFormData((prev) => ({ ...prev, statNotes: value }))}
                        placeholder="Add notes about stat priorities, ratios, or specific stat requirements..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="talentNotes">Talent Notes</Label>
                      <RichTextEditor
                        value={formData.talentNotes || ""}
                        onChange={(value) => setFormData((prev) => ({ ...prev, talentNotes: value }))}
                        placeholder="Add notes about talent leveling priorities, combos, or usage tips..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="weapons" className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Weapon Recommendations</CardTitle>
                      <CardDescription>Add recommended weapons for this build</CardDescription>
                    </div>
                    <Button type="button" onClick={addWeapon} size="sm">
                      <Plus className="mr-2 size-4" />
                      Add Weapon
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {formData.weapons.map((weapon, index) => (
                      <Card key={index}>
                        <CardContent className="pt-4">
                          <div className="grid gap-4 md:grid-cols-4">
                            <div className="space-y-2">
                              <Label>Weapon ID</Label>
                              <Input
                                type="number"
                                value={weapon.weaponId}
                                onChange={(e) => updateWeapon(index, "weaponId", Number.parseInt(e.target.value))}
                                placeholder="Weapon ID"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Rank</Label>
                              <Select
                                value={weapon.weaponRank.toString()}
                                onValueChange={(value) => updateWeapon(index, "weaponRank", Number.parseInt(value))}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5].map((rank) => (
                                    <SelectItem key={rank} value={rank.toString()}>
                                      {rank}★
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label>Refinement</Label>
                              <Select
                                value={weapon.weaponRefinement !== null ? weapon.weaponRefinement.toString() : "none"}
                                onValueChange={(value) =>
                                  updateWeapon(
                                    index,
                                    "weaponRefinement",
                                    value === "none" ? null : Number.parseInt(value),
                                  )
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Optional" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="none">None</SelectItem>
                                  {[1, 2, 3, 4, 5].map((ref) => (
                                    <SelectItem key={ref} value={ref.toString()}>
                                      R{ref}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex items-end">
                              <Button type="button" variant="destructive" size="sm" onClick={() => removeWeapon(index)}>
                                <Trash2 className="size-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Weapon Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RichTextEditor
                      value={formData.weaponNotes || ""}
                      onChange={(value) => setFormData((prev) => ({ ...prev, weaponNotes: value }))}
                      placeholder="Add notes about weapon choices, comparisons, or specific recommendations..."
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="artifacts" className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Artifact Recommendations</CardTitle>
                      <CardDescription>Add recommended artifact combinations</CardDescription>
                    </div>
                    <Button type="button" onClick={addArtifact} size="sm">
                      <Plus className="mr-2 size-4" />
                      Add Artifact Build
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {formData.artifacts.map((artifact, artifactIndex) => (
                      <Card key={artifactIndex}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-base">Artifact Build #{artifactIndex + 1}</CardTitle>
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => removeArtifact(artifactIndex)}
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label>Priority Rank</Label>
                              <Select
                                value={artifact.rank.toString()}
                                onValueChange={(value) => updateArtifact(artifactIndex, "rank", Number.parseInt(value))}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5].map((rank) => (
                                    <SelectItem key={rank} value={rank.toString()}>
                                      Priority {rank}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex items-end">
                              <Button type="button" onClick={() => addArtifactSet(artifactIndex)} size="sm">
                                <Plus className="mr-2 size-4" />
                                Add Set
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Artifact Sets</Label>
                            {artifact.artifactSets.map((set, setIndex) => (
                              <div key={setIndex} className="grid gap-2 md:grid-cols-3 p-3 border rounded">
                                <Select
                                  value={set.setId}
                                  onValueChange={(value) => updateArtifactSet(artifactIndex, setIndex, "setId", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select artifact set" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {ARTIFACT_SETS.map((setName) => (
                                      <SelectItem key={setName} value={setName.toLowerCase().replace(/\s+/g, "-")}>
                                        {setName}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <Select
                                  value={set.piecesCount.toString()}
                                  onValueChange={(value) =>
                                    updateArtifactSet(artifactIndex, setIndex, "piecesCount", Number.parseInt(value))
                                  }
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {[2, 4].map((count) => (
                                      <SelectItem key={count} value={count.toString()}>
                                        {count} pieces
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => removeArtifactSet(artifactIndex, setIndex)}
                                >
                                  <Trash2 className="size-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Artifact Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RichTextEditor
                      value={formData.artifactNotes || ""}
                      onChange={(value) => setFormData((prev) => ({ ...prev, artifactNotes: value }))}
                      placeholder="Add notes about artifact set bonuses, farming locations, or alternative combinations..."
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Separator />

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">
                <Save className="mr-2 size-4" />
                Save Build
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
