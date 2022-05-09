package com.example.util;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class LocalDateTimeDeserializer extends StdDeserializer<LocalDateTime> {
		
		public LocalDateTimeDeserializer() {
			this( (Class) null );
		}
		
		protected LocalDateTimeDeserializer( Class<LocalDateTime> t ) {
				super( t );
		}
		
		@Override
		public LocalDateTime deserialize( JsonParser jsonParser, DeserializationContext deserializationContext )
					throws IOException, JsonProcessingException {
				
				if ( jsonParser == null ) {
						return null;
				}
				
				String targetDateStr = jsonParser.getValueAsString();
				
				LocalDateTime dateTime = LocalDateTime.parse( targetDateStr , DateTimeFormatter.ofPattern( "yyyy-MM-dd HH:mm:ss.SSS" ) );
				return dateTime;
		}
}
