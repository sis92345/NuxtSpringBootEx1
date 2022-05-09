package com.example.config;

import com.example.util.LocalDateTimeDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Configuration
public class MvcConfiguration implements WebMvcConfigurer {

    public ObjectMapper objectMapper() {
        
        ObjectMapper objectMapper = Jackson2ObjectMapperBuilder.json().
                                                deserializerByType( LocalDateTime.class , new LocalDateTimeDeserializer() )
                                                .modules( new JavaTimeModule() ).build();
        
        return objectMapper;
    }
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler( "/**" )
                .addResourceLocations( "classpath:/static/" )
                .setCacheControl( CacheControl.maxAge( 10 , TimeUnit.MINUTES ) );
    }
    
    @Bean
    public MappingJackson2HttpMessageConverter MappingJackson2HttpMessageConverter() {
        MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter = new MappingJackson2HttpMessageConverter();
        mappingJackson2HttpMessageConverter.setObjectMapper( objectMapper() );
        
        return mappingJackson2HttpMessageConverter;
    }
    
    
    @Override
    public void configureMessageConverters( List<HttpMessageConverter<?>> converters) {
        converters.add( MappingJackson2HttpMessageConverter() );
    }
}
