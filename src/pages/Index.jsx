import { useState } from "react";
import { Container, VStack, Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import NoteForm from "../components/NoteForm";
import Note from "../components/Note";

const Index = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Box bg="gray.100" minH="100vh">
      <NavBar />
      <Container maxW="container.md" py={4}>
        <NoteForm onAdd={addNote} />
        <VStack spacing={4}>
          {notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;