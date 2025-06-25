"use client"

import { AuthLayout } from "../../components/auth-layout"
import { CharacterBuildForm } from "../../components/character-build-form"
import { useUser } from "@clerk/nextjs"

export default function CreateBuildPage() {
  const { user } = useUser()

  const userForComponent = user ? {
    id: user.id,
    username: user.username ?? user.emailAddresses[0]?.emailAddress ?? 'User',
    displayName: user.fullName ?? user.firstName ?? 'User',
    avatar: user.imageUrl ?? '/placeholder.svg',
    provider: 'clerk'
  } : null

  return (
    <AuthLayout currentPage="create-build">
      {userForComponent && (
        <CharacterBuildForm user={userForComponent} />
      )}
    </AuthLayout>
  )
}
