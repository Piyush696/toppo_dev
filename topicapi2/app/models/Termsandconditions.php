<?php

class Termsandconditions extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $termsandconditions_id;

    /**
     *
     * @var string
     */
    public $heading;

    /**
     *
     * @var string
     */
    public $termsandconditions;

    /**
     *
     * @var string
     */
    public $copyright;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("termsandconditions");
        $this->hasMany('termsandconditions_id', 'UserTermsandconditions', 'termsandconditions_id', ['alias' => 'UserTermsandconditions']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'termsandconditions';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Termsandconditions[]|Termsandconditions|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Termsandconditions|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
