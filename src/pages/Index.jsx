import React, { useState } from "react";
import { Box, Heading, Text, Image, SimpleGrid, Input, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, AspectRatio } from "@chakra-ui/react";
import { FaSearch, FaPlay } from "react-icons/fa";

const movies = [
  {
    id: 1,
    title: "Filmas 1",
    description: "Filmo 1 aprašymas",
    image: "https://images.unsplash.com/photo-1579762689878-ce41dd75ad98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMDF8ZW58MHx8fHwxNzEyMDAxMTYwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    videoUrl: "p-XJuO12jS8",
  },
  {
    id: 2,
    title: "Filmas 2",
    description: "Filmo 2 aprašymas",
    image: "https://images.unsplash.com/photo-1579762689878-ce41dd75ad98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMDJ8ZW58MHx8fHwxNzEyMDAxMTYxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    videoUrl: "VIDEO_ID_2",
  },
  // Pridėkite daugiau filmų...
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const openModal = (movie) => {
    setSelectedMovie(movie);
    onOpen();
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Filmų svetainė
      </Heading>
      <Box mb={4}>
        <Input placeholder="Ieškoti filmų..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <IconButton aria-label="Search" icon={<FaSearch />} ml={2} onClick={() => {}} />
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {filteredMovies.map((movie) => (
          <Box key={movie.id} borderWidth={1} borderRadius="md" p={4}>
            <Image src={movie.image} alt={movie.title} mb={2} />
            <Heading as="h2" size="md" mb={2}>
              {movie.title}
            </Heading>
            <Text mb={2}>{movie.description}</Text>
            <IconButton aria-label="Play" icon={<FaPlay />} onClick={() => openModal(movie)} />
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {selectedMovie && (
              <Box>
                <AspectRatio ratio={16 / 9}>
                  <iframe src={selectedMovie.videoUrl} allowFullScreen />
                </AspectRatio>
                <Heading as="h2" size="lg" mt={4} mb={2}>
                  {selectedMovie.title}
                </Heading>
                <Text>{selectedMovie.description}</Text>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
