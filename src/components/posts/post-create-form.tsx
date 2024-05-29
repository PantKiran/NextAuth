"use client";

import { useFormState } from "react-dom";
import {
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actoins from "@/actions";
import FormButton from "../common/form-button";
export const PostCreateForm = () => {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action="">
          <div className="flex flex-col gap-4 p-4 w-80">
            <h1 className="text-lg ">Create a Post </h1>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
            />
            <Input
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
            />
            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};
