import { Box, Heading, Text, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Note = ({ note, onDelete }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} bg="white" shadow="md">
      <Heading size="md" mb={2}>{note.title}</Heading>
      <Text mb={4}>{note.content}</Text>
      <IconButton
        aria-label="Delete Note"
        icon={<FaTrash />}
        onClick={() => onDelete(note.id)}
        colorScheme="red"
      />
    </Box>
  );
};

export default Note;