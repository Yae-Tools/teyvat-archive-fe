"use client";

import { AuthLayout } from "../../components/auth-layout";
import { RichTextTest } from "../../components/rich-text-test";

export default function RichTextTestPage() {
  return (
    <AuthLayout currentPage="rich-text-test">
      <RichTextTest />
    </AuthLayout>
  );
}
