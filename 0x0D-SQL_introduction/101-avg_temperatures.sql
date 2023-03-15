-- Temp #0
-- select city, average
SELECT city, AVG(value) AS "avg_temp" FROM temperatures GROUP BY city ORDER BY avg_temp DESC;
