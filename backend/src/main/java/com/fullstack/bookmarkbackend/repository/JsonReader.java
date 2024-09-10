package com.fullstack.bookmarkbackend.repository;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;

public class JsonReader {

    public static <T> T readObjectFromJsonFile(String filePath, Class<T> objectType) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            // Read the JSON file and convert it into the specified object type
            return objectMapper.readValue(new File(filePath), objectType);
        } catch (IOException e) {
            System.err.println("Error reading object from file: " + e.getMessage());
            return null;
        }
    }

}