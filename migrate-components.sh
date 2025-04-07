#!/bin/bash

# Create the destination directory if it doesn't exist
mkdir -p app/components

# List of components to migrate
components=(
  "About"
  "Contact"
  "CustomCursor"
  "Footer"
  "Header"
  "Hero"
  "ProjectGallery"
  "ProjectScene3D"
  "Projects"
  "PropertyForSale"
  "Services"
  "Team"
)

# Loop through all components
for component in "${components[@]}"; do
  source_file="client/src/components/${component}.tsx"
  dest_file="app/components/${component}.tsx"
  
  # Check if source file exists
  if [ -f "$source_file" ]; then
    # Read the contents of the source file
    content=$(cat "$source_file")
    
    # Add 'use client' directive if not already present
    if ! grep -q "^'use client';" "$source_file" && ! grep -q '^"use client";' "$source_file"; then
      echo "'use client';

$content" > "$dest_file"
    else
      # If 'use client' is already present, just copy the file as is
      cp "$source_file" "$dest_file"
    fi
    
    # Update imports to use the new paths
    sed -i 's|from "../components/ui/|from "./ui/|g' "$dest_file"
    sed -i 's|from "@/components/ui/|from "./ui/|g' "$dest_file"
    sed -i 's|from "../hooks/|from "../hooks/|g' "$dest_file"
    sed -i 's|from "@/hooks/|from "../hooks/|g' "$dest_file"
    sed -i 's|from "../lib/|from "../lib/|g' "$dest_file"
    sed -i 's|from "@/lib/|from "../lib/|g' "$dest_file"
    
    echo "Migrated: ${component}.tsx"
  else
    echo "Warning: Source file not found: ${source_file}"
  fi
done

echo "Component migration complete!"