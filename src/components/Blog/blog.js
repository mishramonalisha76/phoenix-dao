import React, { useState } from "react";




export default function Blog() {

    const blogData = {
        heading: "Heading", content: `Headingcontent:Contrary 
to popular belief, Lorem Ipsum is not simply random text. It has roots in 
a piece of classical Latin literature from 45 BC, making it over 2000 years 
old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virg
inia, looked up one of the more obscure Latin words, consectetur, from a Lor
em Ipsum passage, and going through the cites of the word in classical li
terature, discovered the undoubtable source. Lorem Ipsum comes from section
s 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good a
    nd Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
     of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
     Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard
      chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sect
      ions 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced i
      n their exact original form, accompanied by English versions from the 1914 translation by H
      . Rackham.Headingcontent:Contrary 
      to popular belief, Lorem Ipsum is not simply random text. It has roots in 
      a piece of classical Latin literature from 45 BC, making it over 2000 years 
      old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virg
      inia, looked up one of the more obscure Latin words, consectetur, from a Lor
      em Ipsum passage, and going through the cites of the word in classical li
      terature, discovered the undoubtable source. Lorem Ipsum comes from section
      s 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good a
          nd Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
           of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
           Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard
            chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sect
            ions 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced i
            n their exact original form, accompanied by English versions from the 1914 translation by H
            . Rackham.Headingcontent:Contrary 
            to popular belief, Lorem Ipsum is not simply random text. It has roots in 
            a piece of classical Latin literature from 45 BC, making it over 2000 years 
            old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virg
            inia, looked up one of the more obscure Latin words, consectetur, from a Lor
            em Ipsum passage, and going through the cites of the word in classical li
            terature, discovered the undoubtable source. Lorem Ipsum comes from section
            s 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good a
                nd Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
                 of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                 Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard
                  chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sect
                  ions 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced i
                  n their exact original form, accompanied by English versions from the 1914 translation by H
                  . Rackham.`}

    return (
        <div class="flex flex-col mx-24 my-14">

            <h1 class="text-6xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-white">
                {`> Blog`}
            </h1>
            <div class="my-14 mt-10 bg-green-500 p-10 max-h-screen overflow-y-auto">
                <h3 class="text-4xl font-semibold uppercase">{blogData.heading}</h3>
                <p class="text-2xl font-bold "> {blogData.content}</p>
            </div>
        </div>

    );
}