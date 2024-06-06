import { useState } from "react";
import { Box, Button, Input, Textarea, VStack } from "@chakra-ui/react";

const NoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAdd({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <VStack spacing={4}>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" colorScheme="blue" width="full">
          Add Note
        </Button>
      </VStack>
    </Box>
  );
};

export default NoteForm;