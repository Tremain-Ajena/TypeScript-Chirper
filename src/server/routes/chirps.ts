import { Router, request, response } from 'express';
import ChirpStore from '../utilities/chirpstore';

const router = Router();

// GET /api/chirps
router.get('/', (req, res) => {
    const data = ChirpStore.GetChirps();
    res.json(data);

    // res.json({msg: 'TEST ENDPOINT!'})
});

//GET /api/chirps/:chirpid
router.get('chirpid', (request, response) => {
    const chirpid = request.params.chirpid;
    // the "const chirpid = request.params.chirpid;" prevents the networking code and backend code from being muddled together
    const chirp = ChirpStore.GetChirp(chirpid);
    // use the GetChirp() function in the line of code above instead of GetChirps() because GetChirp() actually grabs the chirps by ID.
    response.json(chirp);
});

// POST /api/chirps
router.post('/', (request, response) => {
    const chirp = request.body;
    ChirpStore.CreateChirp(chirp);
    response.status(201).json('Chirp Has Been Posted')
});

// PUT /api/chirps/:chirpid
router.put('/:chirpid', (request, response) => {
    const chirpid = request.params.chirpid;
    const chirp = request.body;
    ChirpStore.UpdateChirp(chirpid, chirp);
    response.status(200).json(`Chirp ${chirpid} Has Been Updated`);
});

// DELETE /api/chirps/:chirpid
router.delete('/:chirpid', (request, response) => {
    const chirpid = request.params.chirpid;
    ChirpStore.DeleteChirp(chirpid);
    response.status(200).json(`Chirp ${chirpid} Deleted`);
});

export default router;