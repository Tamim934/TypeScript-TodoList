# npm i


# TypeScript
![TypeScript Logo](https://th.bing.com/th/id/R.01b1cbb318f8cfc43b756500aa085a23?rik=zlJV12T1l%2bwZDw&pid=ImgRaw&r=0)
## Introduction

TypeScript is a syntactic superset of JavaScript which adds static typing[^1^][1]. It is an open-source pure object-oriented programming language[^2^][3] and is designed for large-scale JavaScript application development[^2^][3]. TypeScript is built on top of JavaScript and introduces syntax enhancements[^3^][4].

## Why use TypeScript?

JavaScript is a loosely typed language, which can make it difficult to understand what types of data are being passed around[^1^][1]. TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match[^1^][1]. For example, TypeScript will report an error when passing a string into a function that expects a number[^1^][1].

## How to use TypeScript?

A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript[^1^][1]. Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code[^1^][1].


## Features

### Static Typing

One of the main features of TypeScript is static typing. JavaScript is dynamically typed, which means you don't know what type a variable is until runtime. On the other hand, TypeScript is statically typed, so you know what type a variable is as you're writing the code.

![TypeScript and JavaScript comparison]

### Classes and Interfaces

TypeScript introduces the concept of classes and interfaces. A class is a blueprint for creating objects. An interface is a way to define a contract on a function with respect to the arguments and their type.

### Modules

TypeScript supports module-based code organization. Modules are executed within their own scope, not in the global scope.

## Setting Up a TypeScript Project

To set up a TypeScript project, you need to have Node.js and npm installed on your machine. Then, you can install TypeScript globally on your machine by running `npm install -g typescript`.

You can compile TypeScript files using the TypeScript compiler. For example, if you have a TypeScript file named `main.ts`, you can compile it to JavaScript using the command `tsc main.ts`.

![TypeScript code snippet]

## Using Images in TypeScript

When working with images in TypeScript, you might encounter some issues due to the static typing system. For example, if you're trying to import an image file in a TypeScript file, you might get an error because TypeScript doesn't recognize the image file format.

To solve this issue, you can declare a module for image files in a declaration file (`.d.ts`). Here's an example:

```typescript
declare module "*.png";
