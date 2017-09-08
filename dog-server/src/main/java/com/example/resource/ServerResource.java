package com.example.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * @author by Hasra Harithaki.
 */
@Path("/v1")
@Produces(MediaType.APPLICATION_JSON)
public class ServerResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(ServerResource.class);

    public ServerResource() {
    }

    @GET
    @Path("/advertisements")
    public String getAllOrder() {
        return "This is sample advertisement text comes from the API";
    }
}
