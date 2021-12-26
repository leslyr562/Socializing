const router = require('express').Router();
const {
    addThought,
    addReaction,
    removeReaction,
    removeThought
} = require('../../controllers/thought-controller');

//api/thoughts/userId
router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);


router
.route('/:userId/:thoughtId')
.put(addReaction)
.delete(removeThought);

module.exports = router;