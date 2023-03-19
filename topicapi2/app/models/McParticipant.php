<?php

class McParticipant extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $mcParticipant_id;

    /**
     *
     * @var integer
     */
    public $mcSubject_id;

    /**
     *
     * @var integer
     */
    public $participant_user_id;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("mc-participant");
        $this->belongsTo('mc-subject_id', 'Mc-subject', 'mc-subject_id', ['alias' => 'McSubject']);
        $this->belongsTo('participant_user_id', 'User', 'user_id', ['alias' => 'User']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'mc-participant';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return McParticipant[]|McParticipant|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return McParticipant|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
