# Introduction

The Dropwizard server application.


# Angular app

Front end application based on angularJs framework can be found inside resources/assets


# Running The Application

To test the example application run the following commands.

    ./gradlew run
    
# Build and Run Application as a jar file

* To package the example run the following from the root sdn-server-dropwizard directory.

        ./gradlew shadowjar

* To run the server run.

        java -jar build/libs/sdn-server-dropwizard-1.0.0-all.jar server config.yml

## UI can be viewed using

    http://localhost:8080/

## API will be expose in 

	http://localhost:8080/api/v1/advertisements
