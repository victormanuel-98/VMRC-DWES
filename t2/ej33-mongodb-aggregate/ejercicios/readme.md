# Consultas completas con los resultados:

## 1.1. Devolver la cuenta de cuántas películas y series hay en español
- Añadir los nombres de cada película en un array

```
db.movies.aggregate([
    {
        $match: { languages: 'Spanish' }
    },
    {
        $group: {
            _id: null,
            total: { $count: {} },
            peliculas: { $push: '$title' }
        }
    }
]);
```
![consulta1.1](/ejercicios/images/ej1.1.png)
