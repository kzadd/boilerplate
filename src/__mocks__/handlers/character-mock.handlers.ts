import { http, HttpResponse } from 'msw'

import { environment } from '../../shared/configs'

/**
 * characterMock handlers for the API.
 */
const characterMock = [
  http.get(`${environment.apiBaseUrl}/character`, () => {
    return HttpResponse.json({
      errors: null,
      payload: {
        informacion: {
          cantidad: 1,
          paginas: 1
        },
        resultados: [
          {
            especie: 'Humano',
            estado: 'Vivo',
            genero: 'Masculino',
            id: '1',
            nombre: 'Rick Sanchez',
            tipo: ''
          }
        ]
      },
      success: 'OK'
    })
  })
]

export default characterMock
