"use client";

import { useFormState } from "react-dom";
import {
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Textarea,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";
export const PostCreateForm = () => {
  const [formState, action] = useFormState(actions.createPost, { errors: {} });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h1 className="text-lg ">Create a Post </h1>
            <Input
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
            />
            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
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
