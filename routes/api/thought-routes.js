const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    addReaction,
    removeReaction,
    removeThought,
    updateThought
} = require('../../controllers/thought-controller');

//api/thoughts/userId
router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

router.route('/').get(getAllThought)


router.route('/:id').get(getThoughtById)


router
.route('/:userId/:thoughtId')
.put(updateThought)
.post(addReaction)
.delete(removeThought);

module.exports = router;