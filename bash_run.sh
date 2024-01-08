#!/usr/bin/env bash

emulator_list=($(emulator -list-avds))

echo 'Wybierz emulator z listy'

select emul_choice in "${emulator_list[@]}"; do
  [[ -n $emul_choice ]] || { echo "Invalid choice. Please try again." >&2; continue; }
  break # valid choice was made; exit prompt.
done

cd ./tests

declare -a test_list

for file in *.js
do
    test_list=(${test_list[*]} "$file")
done

cd ..

echo 'Wybierz test z listy'
select test_choice in "${test_list[@]}"; do
  [[ -n $test_choice ]] || { echo "Invalid choice. Please try again." >&2; continue; }
  break # valid choice was made; exit prompt.
done

echo wybrany emulator $emul_choice
echo wybrany test $test_choice

node ./node_modules/mocha/bin/mocha ./tests/$test_choice --timeout 60000 $emul_choice