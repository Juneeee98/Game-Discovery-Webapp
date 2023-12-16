import axios from "axios";

export default axios.create({baseURL: 'https://api.rawg.io/api',
              params: {
                key: 'b0861ee6a1ba4f4a94cff8d669a4038f'
            }
        })