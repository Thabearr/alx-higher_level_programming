-- Say my name
-- don't list rows without name
SELECT score, name FROM second_table WHERE name IS NOT NULL ORDER BY score DESC;
