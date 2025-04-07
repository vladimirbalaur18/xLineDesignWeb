#!/bin/bash

# Create the destination directory if it doesn't exist
mkdir -p app/components/ui

# Loop through all UI component files
for file in client/src/components/ui/*.tsx; do
  filename=$(basename "$file")
  
  # Read the contents of the source file
  content=$(cat "$file")
  
  # Add 'use client' directive if not already present
  if ! grep -q "^'use client';" "$file" && ! grep -q '^"use client";' "$file"; then
    echo "'use client';
    
$content" > "app/components/ui/$filename"
  else
    # If 'use client' is already present, just copy the file as is
    cp "$file" "app/components/ui/$filename"
  fi
  
  echo "Migrated: $filename"
done

echo "UI Component migration complete!"