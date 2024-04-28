// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Flex, Heading, Input, Select, Text, VStack, Image } from "@chakra-ui/react";
import { FaUpload, FaChartBar, FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Data Exploration and Visualization Application</Heading>
      <Flex direction="column" align="center" justify="center">
        <VStack spacing={5} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">File Upload</Heading>
            <Flex align="center" mt={3}>
              <Input placeholder="Upload CSV file" size="md" mr={3} type="file" />
              <Button leftIcon={<FaUpload />} colorScheme="blue">
                Upload
              </Button>
            </Flex>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Data Preview</Heading>
            <Text mt={3}>Data will be displayed here after upload...</Text>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Visualization Options</Heading>
            <Select placeholder="Select visualization type" mt={3}>
              <option value="scatter">Scatter Plot</option>
              <option value="line">Line Chart</option>
              <option value="histogram">Histogram</option>
            </Select>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Interactive Visualizations</Heading>
            <Flex justify="space-around" mt={3}>
              <Button leftIcon={<FaChartBar />} colorScheme="purple">
                Generate
              </Button>
            </Flex>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">NLP Integration</Heading>
            <Flex align="center" mt={3}>
              <Button leftIcon={<FaRobot />} colorScheme="teal">
                Analyze Text
              </Button>
            </Flex>
            <Text mt={3}>Insights will be displayed here...</Text>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
