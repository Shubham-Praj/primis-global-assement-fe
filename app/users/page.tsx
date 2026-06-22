import type { Metadata } from "next";
import UsersPageContent from "../components/UsersPageContent";

export const metadata: Metadata = {
  title: "Users | Primis-Global-Assement",
  description: "User management table for Primis-Global-Assement",
};

export default function UsersPage() {
  return <UsersPageContent />;
}
