<?php

class Disapprovalreason extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $disapprovalreason_id;

    /**
     *
     * @var string
     */
    public $text;

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
        $this->setSource("disapprovalreason");
        $this->hasMany('disapprovalreason_id', 'Topiclink', 'disapprovalreason_id', ['alias' => 'Topiclink']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'disapprovalreason';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Disapprovalreason[]|Disapprovalreason|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Disapprovalreason|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
