<?php

class Flagword extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $flagword_id;

    /**
     *
     * @var string
     */
    public $flagword;

    /**
     *
     * @var string
     */
    public $rationale;

    /**
     *
     * @var string
     */
    public $inString;

    /**
     *
     * @var string
     */
    public $hasException;

    /**
     *
     * @var string
     */
    public $exceptions;

    /**
     *
     * @var integer
     */
    public $severity;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("flagword");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'flagword';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Flagword[]|Flagword|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Flagword|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
