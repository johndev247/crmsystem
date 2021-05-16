import { nanoid } from "@reduxjs/toolkit";

export const tickets = [
  {
    id: nanoid(),
    user: "John",
    title: "SSL ISSUE",
    desc: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta.",
    status: "Opened",
    date: new Date().toLocaleString(),
  },
  {
    id: nanoid(),
    user: "Simon",
    title: "Profile Picture",
    desc: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta.",
    status: "Opened",
    date: new Date().toLocaleString(),
  },
  {
    id: nanoid(),
    user: "Peter",
    title: "Dashboard",
    status: "Closed",
    desc: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta.",
    date: new Date().toLocaleString(),
  },
  {
    id: nanoid(),
    user: "Blessing",
    title: "Profile Update",
    desc: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta.",
    status: "Opened",
    date: new Date().toLocaleString(),
    messages: [
      {
        id: 1,
        date: new Date().toLocaleString(),
        sender: "me",
        fullname: "John Solomon",
        message:
          "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.",
      },
      {
        id: 2,
        sender: "admin",
        date: new Date().toLocaleString(),
        fullname: "David Joel",
        message:
          "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.",
      },
      {
        id: 3,
        sender: "me",
        date: new Date().toLocaleString(),
        fullname: "John Solomon",
        message:
          "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.",
      },
      {
        id: 4,
        sender: "me",
        date: new Date().toLocaleString(),
        fullname: "John Solomon",
        message:
          "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.",
      },
      {
        id: 5,
        date: new Date().toLocaleString(),
        sender: "admin",
        fullname: "David Joel",
        message:
          "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.",
      },
    ],
  },
];
