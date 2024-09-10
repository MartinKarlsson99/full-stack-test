package com.fullstack.bookmarkbackend.repository;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;

public class JsonWriter {
    public static void writeObjectToJsonFile(Object object, String filePath) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            // Write the object to a JSON file
            objectMapper.writeValue(new File(filePath), object);
            System.out.println("Object written to file successfully!");
        } catch (IOException e) {
            System.err.println("Error writing object to file: " + e.getMessage());
        }
    }

}