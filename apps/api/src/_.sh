#!/bin/bash

# Перевірка, чи вказано директорію. Якщо ні, використовується поточна.
DIRECTORY=${1:-.}

# Функція для виведення інформації про файл
process_file() {
    local file_path="$1"
    echo "# -----------------------------------"
    echo "# Шлях до файлу: $file_path"
    echo "# Вміст файлу:"
    echo "# -----------------------------------"
    
    # Перевірка, чи файл не є бінарним
    if file "$file_path" | grep -q text; then
        cat "$file_path"
    else
        echo "Цей файл є бінарним і не може бути відображений."
    fi
    
    echo "\n\n"
}

export -f process_file

# Використання find для пошуку всіх файлів і обробка їх функцією process_file
find "$DIRECTORY" -type f -print0 | while IFS= read -r -d '' file; do
    process_file "$file"
done
