<?php
namespace App\Models;
class Sitevariable extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $sitevariable_id;

    /**
     *
     * @var string
     */
    public $value;

    /**
     *
     * @var string
     */
    public $valuetype;

    /**
     *
     * @var string
     */
    public $applicationarea;

    /**
     *
     * @var string
     */
    public $description;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("sitevariable");
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'sitevariable';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Sitevariable[]|Sitevariable|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Sitevariable|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
