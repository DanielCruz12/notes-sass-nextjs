"use client";
import { useEffect } from "react";

const LightningWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.twentyuno.net/js/app.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className=" flex justify-center items-center w-screen"
      style={{ height: "auto", width: "auto" }}
      dangerouslySetInnerHTML={{
        __html: `<lightning-widget
                   name="Daniel Cruz 🫡🤖⚡▶︎ •၊၊||၊|။||||| 0:22 "
                   to="dandubua@blink.sv"
                   image="https://i.ibb.co/vXrKS2v/Imagen-de-Whats-App-2024-09-02-a-las-15-49-13-109092b5.jpg"
                   labels="🍬, ☕, 🍕"
                  style="width: 100%; height: 100%;"
                 ></lightning-widget>`,
      }}
    />
  );
};

export default LightningWidget;
