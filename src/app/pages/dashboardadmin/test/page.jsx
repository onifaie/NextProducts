import Layout from "../layout";
import React from "react";

export default function page() {
  return (
    <main className=" container   h-screen  ml-56">
      <h1> this page Test </h1>
    </main>
  );
}

page.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
